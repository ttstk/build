import { SaveState, CustomAssetState, GridState, LightingState, HandsState, TurnsState, VectorLineState, ObjectState, SnapPointState, CustomDecalState, DecalState, TabState, CameraState } from "@matanlurey/tts-save-files/src/types";

export class TtsProject {
  SaveName: string;
  GameMode: string;
  Gravity: number;
  PlayArea: number;
  Date: string;
  Table: string;
  /**
   * URL or empty string
   */
  TableURL?: string | null;
  Sky: string;
  /**
   * URL or empty string
   */
  SkyURL?: string | null;
  Note?: string;
  Rules: string;
  XmlUI: string;
  CustomUIAssets?: CustomAssetState[];
  LuaScript: string;
  LuaScriptState: string;
  Grid: GridState;
  Lighting: LightingState;
  Hands: HandsState;
  Turns: TurnsState;
  /**
   * Vector lines on canvas 0 (table + beyond).
   */
  VectorLines?: VectorLineState[];
  /**
   * Objects on the table.
   */
  ObjectStates: ObjectState[];
  /**
   * Snap points not attached to objects.
   */
  SnapPoints?: SnapPointState[];
  /**
   * Decals that can be placed in the world.
   */
  DecalPallet: CustomDecalState[];
  /**
   * Decals not attached to objects.
   */
  Decals?: DecalState[];
  /**
   * Notepad tabs
   */
  TabStates: {
    [k: string]: TabState;
  };
  /**
   * Saved camera positions.
   */
  CameraStates?: (CameraState | null)[];
  VersionNumber: string;
  MusicPlayer?: unknown;

  constructor(saveData: SaveState) {
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

  createSaveData(): SaveState {
    const data: SaveState = {
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
    }
    return data;
  }
}
