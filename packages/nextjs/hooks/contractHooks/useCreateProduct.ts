import { useCallback } from "react";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import toast from "react-hot-toast";
import { getProvider } from "~~/constants/provider";
import { getFarm } from "~~/constants/contracts";


export const useCraeteProduct = () =>{

    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async(_productName:string, _productImage: string, _productDescription: string, _productPrice: number)=>{


        const readWriteProvider = getProvider(walletProvider);

        const signer = readWriteProvider ? await readWriteProvider.getSigner() : null;

        const contract = getFarm(signer);

        const loadingToast1 = toast.loading('Creating  product');

        try {

            const transaction = await contract.addFarmProduct(_productName, _productImage, _productDescription, _productPrice);
            
            const receipt = await transaction.wait();

            console.log(receipt.status)

            toast.remove(loadingToast1)

            toast.success(`Creation Successful`)

            return receipt;

        } catch (error: any) {
            
            toast.remove(loadingToast1)
            
            toast.error(error.reason)

            console.error(error)
        
        }
        
    }, [chainId, walletProvider]);
}