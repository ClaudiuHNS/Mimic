let _ddragon: string | undefined;
export function ddragon() {
    if (_ddragon) return _ddragon;

    // Load ddragon async.
    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.status !== 200 || !req.responseText || req.readyState !== 4) return;
        const versions: string[] = JSON.parse(req.responseText);
        _ddragon = versions[0]; // newest patch is first in the list
    };
    req.open("GET", "http://ddragon.leagueoflegends.com/api/versions.json", true);
    req.send();

    // Return default until we've loaded.
    return "8.23.1";
}

export const POSITION_NAMES: { [key: string]: string } = {
    TOP: "Top",
    JUNGLE: "Jungle",
    MIDDLE: "Mid",
    BOTTOM: "Bottom",
    UTILITY: "Support",
    FILL: "Fill"
};

import RoleUnselected = require("./static/role-unselected.png");
import RoleTop = require("./static/role-top.png");
import RoleJungle = require("./static/role-jungle.png");
import RoleMid = require("./static/role-mid.png");
import RoleBot = require("./static/role-bot.png");
import RoleSupport = require("./static/role-support.png");
import RoleFill = require("./static/role-fill.png");

export type Role = "TOP" | "JUNGLE" | "MIDDLE" | "BOTTOM" | "UTILITY" | "FILL" | "UNSELECTED";

export function roleImage(role: Role) {
    if (role === "UNSELECTED") return RoleUnselected;
    if (role === "TOP") return RoleTop;
    if (role === "JUNGLE") return RoleJungle;
    if (role === "MIDDLE") return RoleMid;
    if (role === "BOTTOM") return RoleBot;
    if (role === "UTILITY") return RoleSupport;
    if (role === "FILL") return RoleFill;
    return "";
}

import HABackground = require("./static/bg-ha.jpg");
import TTBackground = require("./static/bg-tt.jpg");
import SRBackground = require("./static/bg-sr.jpg");
import MagicBackground = require("./static/magic-background.jpg");

export function mapBackground(mapId: number) {
    if (!mapId) return "";
    if (mapId === 10) return "background-image: url(" + TTBackground + ");";
    if (mapId === 11) return "background-image: url(" + SRBackground + ");";
    if (mapId === 12) return "background-image: url(" + HABackground + ");";
    return "background-image: url(" + MagicBackground + ");";
}