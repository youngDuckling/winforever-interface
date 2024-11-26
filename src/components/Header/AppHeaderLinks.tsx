import React, { useCallback } from "react";
import { FiX } from "react-icons/fi";
import { Trans } from "@lingui/macro";
import { Link } from "react-router-dom";

import { useNotifyModalState } from "lib/useNotifyModalState";
import { HeaderLink } from "./HeaderLink";
import "./Header.scss";
import { isHomeSite } from "lib/legacy";
import ExternalLink from "components/ExternalLink/ExternalLink";
import logoImg from "img/winforever14.svg";
// import logoImg from "img/logo_GMX.svg";

type Props = {
  small?: boolean;
  clickCloseIcon?: () => void;
  openSettings?: () => void;
  showRedirectModal: (to: string) => void;
};

export function AppHeaderLinks({ small, openSettings, clickCloseIcon, showRedirectModal }: Props) {
  const { openNotifyModal } = useNotifyModalState();

  const isLeaderboardActive = useCallback(
    (match, location) => Boolean(match) || location.pathname.startsWith("/competitions"),
    []
  );
  return (
    <div className="App-header-links">
      {small && (
        <div className="App-header-links-header">
          <Link className="App-header-link-main" to="/">
            <img src={logoImg} alt="GMX Logo" />
          </Link>
          <div
            className="App-header-menu-icon-block mobile-cross-menu"
            onClick={() => clickCloseIcon && clickCloseIcon()}
          >
            <FiX className="App-header-menu-icon" />
          </div>
        </div>
      )}{/* @note important menu bar links*/}
      {/* <div className="App-header-link-container">
        <HeaderLink qa="dashboard" to="/dashboard" showRedirectModal={showRedirectModal}>
          <Trans>Dashboard</Trans>
        </HeaderLink>
      </div> */}
      {/* <div className="App-header-link-container">
        <HeaderLink qa="earn" to="/earn" showRedirectModal={showRedirectModal}>
          <Trans>Earn</Trans>
        </HeaderLink>
      </div> */}
      {/* <div className="App-header-link-container">
        <HeaderLink qa="buy" to="/buy" showRedirectModal={showRedirectModal}>
          <Trans>Buy</Trans>
        </HeaderLink>
      </div> */}
      {/* <div className="App-header-link-container">
        <HeaderLink qa="referrals" to="/referrals" showRedirectModal={showRedirectModal}>
          <Trans>Referrals</Trans>
        </HeaderLink>
      </div> */}
      {/* <div className="App-header-link-container">
        <HeaderLink
          qa="leaderboard"
          to="/leaderboard"
          showRedirectModal={showRedirectModal}
          isActive={isLeaderboardActive}
        >
          <Trans>Leaderboard</Trans>
        </HeaderLink>
      </div> */}
      {/* <div className="App-header-link-container">
        <HeaderLink qa="ecosystem" to="/ecosystem" showRedirectModal={showRedirectModal}>
          <Trans>Ecosystem</Trans>
        </HeaderLink>
      </div> */}
      {/* <div className="App-header-link-container">
        <ExternalLink href="https://docs.gmx.io/">
          <Trans>Docs</Trans>
        </ExternalLink>
      </div> */}
      {small && (
        <div className="App-header-link-container">
          <a href="#" onClick={openNotifyModal}>
            <Trans>Alerts</Trans>
          </a>
        </div>
      )}
      {small && !isHomeSite() && (
        <div className="App-header-link-container">
          {/* eslint-disable-next-line */}
          <a href="#" data-qa="settings" onClick={openSettings}>
            <Trans>Settings</Trans>
          </a>
        </div>
      )}
    </div>
  );
}
