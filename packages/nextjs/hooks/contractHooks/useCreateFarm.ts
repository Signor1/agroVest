import { useCallback } from "react";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import toast from "react-hot-toast";
import { getProvider } from "~~/constants/provider";
import { getFarm } from "~~/constants/contracts";


export const useCreateFarm = () =>{

    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async(_name:string, _image: string, _location: string, _contact_info: number, _address: any, _email: string)=>{


        const readWriteProvider = getProvider(walletProvider);

        const signer = readWriteProvider ? await readWriteProvider.getSigner() : null;

        const contract = getFarm(signer);

        const loadingToast1 = toast.loading('Creating  Farm');

        try {

            const transaction = await contract.registerFarms(_name, _image, _location, _contact_info, _address, _email);
            
            const receipt = await transaction.wait();

            console.log(receipt.status)

            toast.remove(loadingToast1)

            toast.success(`Farm Created`)

            return receipt;

        } catch (error: any) {
            
            toast.remove(loadingToast1)
            
            toast.error(error.reason)

            console.error(error)
        
        }
        
    }, [chainId, walletProvider]);
}