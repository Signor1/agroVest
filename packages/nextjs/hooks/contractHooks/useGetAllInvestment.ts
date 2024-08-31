"use client"
// import { useWeb3ModalAccount } from "@web3modal/ethers/react";

import { useState, useEffect } from "react";
import {readOnlyProvider} from "../../constants/provider"
import {getInvestment} from "../../constants/contracts"

const useGetAllInvestment = () => {
  const [data, setData] = useState({loading: true, data: []});

  useEffect(() => {
    let allInvestment;
     (async () => {
      try {
        const contract = getInvestment(readOnlyProvider);
        allInvestment = await contract.allInvestableFarms()
        setData({loading: false, data: allInvestment});
    } catch (error) {
        console.error(error);
      } finally {
        // setData({loading: false, data: allInvestment});
      }
    })();
    console.log(data)
}, []);
return data

};

export default useGetAllInvestment;