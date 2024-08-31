import { ethers } from "ethers";
import daoAbi from "./DAO.json";
import farmAbi from "./farm.json";
import farmEscrowAbi from "./farmEscrow.json";
import investmentAbi from "./investment.json";
import tokenABi from "./TokenAbi.json";

export const getDAO = (providerOrSigner) =>
  new ethers.Contract(
    process.env.NEXT_PUBLIC_DAO_CONTRACT_ADDRESS,
    daoAbi,
    providerOrSigner
  );

export const getFarm = (providerOrSigner) =>
  new ethers.Contract(
    process.env.NEXT_PUBLIC_FARM_CONTRACT_ADDRESS,
    farmAbi,
    providerOrSigner
  );

export const getFarmEscrow = (providerOrSigner) =>
  new ethers.Contract(
    process.env.NEXT_PUBLIC_FARM_ESCROW_CONTRACT_ADDRESS,
    farmEscrowAbi,
    providerOrSigner
  );

export const getInvestment = (providerOrSigner) =>
  new ethers.Contract(
    process.env.NEXT_PUBLIC_INVESTMENT_CONTRACT_ADDRESS,
    investmentAbi,
    providerOrSigner
  );

export const getToken = (providerOrSigner) =>
  new ethers.Contract(
    process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS,
    tokenABi,
    providerOrSigner
  );
