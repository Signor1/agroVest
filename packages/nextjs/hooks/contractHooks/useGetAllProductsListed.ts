// import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useState, useEffect } from "react";
import {readOnlyProvider} from "../../constants/provider"
import {getFarm} from "../../constants/contracts"

const useGetAllProductsListed = () => {
  const [data, setData] = useState({loading: true, data: []});

  useEffect(() => {
     (async () => {
      try {
        const contract = getFarm(readOnlyProvider);
        const allProducts = await contract.getAllFarmProducts()
        console.log(allProducts)
        setData({loading: false, data: allProducts});
    } catch (error) {
        console.error(error);
      } finally {
        // setData({loading: false, data: allProducts});
      }
    })();
    console.log(data)
}, []);
return data

};

export default useGetAllProductsListed;