import { ARBITRUM, ARBITRUM_GOERLI, AVALANCHE, AVALANCHE_FUJI } from "config/chains";
import arbitrum from "img/ic_arbitrum_24.svg";
import avalanche from "img/ic_avalanche_24.svg";
import avalancheTestnet from "img/ic_avalanche_testnet_24.svg";
import arbitrumGoerli from "img/ic_arbitrum_goerli_24.svg";
//@note substitue all with "img/winforever14.svg"
import gmxIcon from "img/winforever14.svg";
// import gmxIcon from "img/winforever14.svg"; gmx_40 or something

// import gmxOutlineIcon from "img/ic_gmxv1flat.svg";
import gmxOutlineIcon from "img/ic_gmxv1flat.svg";

// import glpIcon from "img/ic_glp_40.svg";
import glpIcon from "img/ic_glp_40.svg";

import esGMXIcon from "img/ic_esgmx_40.svg";
import esGMXArbitrumIcon from "img/ic_esgmx_arbitrum.svg";
import esGMXAvaxIcon from "img/ic_esgmx_avalanche.svg";
import gmIcon from "img/gm_icon.svg";
import gmArbitrum from "img/ic_gm_arbitrum.svg";
import gmAvax from "img/ic_gm_avax.svg";
import gmxArbitrum from "img/ic_gmx_arbitrum.svg";
import gmxAvax from "img/ic_gmx_avax.svg";
import glpArbitrum from "img/ic_glp_arbitrum.svg";
import glpAvax from "img/ic_glp_avalanche.svg";
import glvIcon from "img/ic_glv_40.svg";

type ChainIcons = {
  network?: string;
  gmx: string;
  glp: string;
  esgmx?: string;
  gm: string;
  gmxOutline?: string;
  glv?: string;
};

const ICONS: Record<number | "common", ChainIcons> = {
  [ARBITRUM]: {
    network: arbitrum,
    gmx: gmxArbitrum,
    glp: glpArbitrum,
    esgmx: esGMXArbitrumIcon,
    gm: gmArbitrum,
  },
  [AVALANCHE]: {
    network: avalanche,
    gmx: gmxAvax,
    glp: glpAvax,
    esgmx: esGMXAvaxIcon,
    gm: gmAvax,
  },
  [ARBITRUM_GOERLI]: {
    network: arbitrumGoerli,
    gmx: gmxArbitrum,
    glp: glpArbitrum,
    gm: gmArbitrum,
  },
  [AVALANCHE_FUJI]: {
    network: avalancheTestnet,
    gm: gmAvax,
    gmx: gmxAvax,
    glp: glpAvax,
  },
  common: {
    gmx: gmxIcon,
    gmxOutline: gmxOutlineIcon,
    glp: glpIcon,
    esgmx: esGMXIcon,
    gm: gmIcon,
    glv: glvIcon,
  },
};

export function getIcon(chainId: number | "common", label: keyof ChainIcons) {
  if (!chainId || !(chainId in ICONS)) {
    throw new Error(`No icons found for chain: ${chainId}`);
  }

  return ICONS[chainId][label];
}
export function getIcons(chainId: number | "common") {
  if (!chainId || !(chainId in ICONS)) {
    throw new Error(`No icons found for chain: ${chainId}`);
  }

  return ICONS[chainId];
}
