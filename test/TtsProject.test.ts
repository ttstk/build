import { SaveState, CustomAssetState, GridState, LightingState, HandsState, TurnsState, VectorLineState, ObjectState, SnapPointState, CustomDecalState, DecalState, TabState, CameraState } from "@matanlurey/tts-save-files/src/types";
import { TtsProject } from '../src/TtsProject'

// Totally a garbage state.  Provide some actual samples instead.
const simpleSaveState: SaveState =
{
    SaveName: "Simple Save Stub",
    GameMode: "Mode?",
    Gravity: 1,
    PlayArea: 1, //???
    Date: "Now",
    Table: "tabel1",
    TableURL: "",
    Sky: "Sky",
    SkyURL: "",
    Note: "Hello World",
    Rules: "No Rules!",
    XmlUI: "",
    CustomUIAssets: [],
    LuaScript: "print('helloworld')",
    LuaScriptState: "",
    Grid: {
        Type: 2,
        Lines: true,
        Color: { r: 255, g: 255, b: 255 },
        Opacity: 1,
        ThickLines: true,
        Snapping: true,
        Offset: true,
        BothSnapping: true,
        xSize: 1,
        ySize: 1,
        PosOffset: { x: 0, y: 0, z: 0 }
    },
    Lighting: {
        LightIntensity: 1,
        LightColor: { r: 255, g: 255, b: 255 },
        AmbientIntensity: 1,
        AmbientType: 0,
        AmbientSkyColor: { r: 255, g: 255, b: 255 },
        AmbientEquatorColor: { r: 255, g: 255, b: 255 },
        AmbientGroundColor: { r: 255, g: 255, b: 255 },
        ReflectionIntensity: 1,
        LutIndex: 1,
        LutContribution: 1,
        LutURL: ""
    },
    Hands: {
        Enable: true,
        DisableUnused: true,
        Hiding: 0,
        HandTransforms: []
    },
    Turns: {
        Enable: true,
        Type: 0,
        TurnOrder: [],
        Reverse: true,
        SkipEmpty: true,
        DisableInteractions: false,
        PassTurns: true,
        TurnColor: "Blue"
    },
    VectorLines: [],
    ObjectStates: [],
    SnapPoints:[],
    DecalPallet:[],
    Decals: [],
    TabStates: {},
    CameraStates: null,
    VersionNumber: "1"
}

// Totally a garbage test
test('TtsProject Constructor Works', () => {
    expect(new TtsProject(simpleSaveState)).toBeDefined()
});