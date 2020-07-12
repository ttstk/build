"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TtsProject = void 0;
var TtsProject = /** @class */ (function () {
    function TtsProject(saveData) {
        this.SaveName = saveData.SaveName;
        this.GameMode = saveData.GameMode;
        this.Gravity = saveData.Gravity;
        this.PlayArea = saveData.PlayArea;
        this.Date = saveData.Date;
        this.Table = saveData.Table;
        this.TableURL = saveData.TableURL;
        this.Sky = saveData.Sky;
        this.SkyURL = saveData.SkyURL;
        this.Note = saveData.Note;
        this.Rules = saveData.Rules;
        this.XmlUI = saveData.XmlUI;
        this.CustomUIAssets = saveData.CustomUIAssets;
        this.LuaScript = saveData.LuaScript;
        this.LuaScriptState = saveData.LuaScriptState;
        this.Grid = saveData.Grid;
        this.Lighting = saveData.Lighting;
        this.Hands = saveData.Hands;
        this.Turns = saveData.Turns;
        this.VectorLines = saveData.VectorLines;
        this.ObjectStates = saveData.ObjectStates;
        this.SnapPoints = saveData.SnapPoints;
        this.DecalPallet = saveData.DecalPallet;
        this.Decals = saveData.Decals;
        this.TabStates = saveData.TabStates;
        this.CameraStates = saveData.CameraStates;
        this.VersionNumber = saveData.VersionNumber;
        this.MusicPlayer = saveData.MusicPlayer;
    }
    TtsProject.prototype.createSaveData = function () {
        var data = {
            SaveName: this.SaveName,
            GameMode: this.GameMode,
            Gravity: this.Gravity,
            PlayArea: this.PlayArea,
            Date: this.Date,
            Table: this.Table,
            TableURL: this.TableURL,
            Sky: this.Sky,
            SkyURL: this.SkyURL,
            Note: this.Note,
            Rules: this.Rules,
            XmlUI: this.XmlUI,
            CustomUIAssets: this.CustomUIAssets,
            LuaScript: this.LuaScript,
            LuaScriptState: this.LuaScriptState,
            Grid: this.Grid,
            Lighting: this.Lighting,
            Hands: this.Hands,
            Turns: this.Turns,
            VectorLines: this.VectorLines,
            ObjectStates: this.ObjectStates,
            SnapPoints: this.SnapPoints,
            DecalPallet: this.DecalPallet,
            Decals: this.Decals,
            TabStates: this.TabStates,
            CameraStates: this.CameraStates,
            VersionNumber: this.VersionNumber,
            MusicPlayer: this.MusicPlayer,
        };
        return data;
    };
    return TtsProject;
}());
exports.TtsProject = TtsProject;
