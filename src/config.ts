import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "DomainAuction",
    description: "Domain names sold as NFTs via auction.Highest bidder gets full ownership securely on blokchain.",
    chainId:"andromeda-1",
    createdDate:"2025-05-19T18:38:06.572Z",
    modifiedDate:"2025-05-19T18:38:06.572Z",
    id: "andromeda",
    collections:  [
        {
        auction:
        "andr1ee7t8wxugxdlpcuu505q70vgn5k5uvvcmspsl5rlwgzrl56vs96szjy4ac",
        cw721:"andr1d4hk4npjfgu2h9jk2gkrdj7gcce472jvae6qequ8xlhc3layfj4q4emrth",
        name:"Domains",
        featured:"DNFT",
        description:"Domain Auction",
        type: ICollectionType.AUCTION,
        id:"auction"},
    ],};

export default CONFIG;
