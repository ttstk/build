import { readFile as cbReadFile } from "fs";
import * as path from "path";
import { glob as cbGlob } from "glob";
import { promisify } from "util";
import { TtsProject } from "./TtsProject";
import { Instance } from "./Instance";

const readFile = promisify(cbReadFile);
const glob = promisify(cbGlob);

interface TtsprojContents {
  assetRoot: string;
  objectInstances: string;
}

const AssetRootDefault = "./";
const TtsprojFileName = "ttsproj.json";

/**
 * Compiles a {@link TtsProject} from a project directory
 *
 * @export
 * @param {string} ttsprojPath path to the project directory or the ttsproj.json file therein.
 * @returns {Promise<void>}
 */
export async function gatherProjectInfo(ttsprojPath: string): Promise<void> {
  const projectDir = getProjectDir(ttsprojPath)
  console.log(projectDir);
  const ttsproj = await readTtsprojFile(path.join(projectDir, TtsprojFileName));
  console.log(ttsproj);
  const instanceFiles = await glob(ttsproj.objectInstances, { cwd: projectDir });
  const instanceArrs = await readInstanceFiles(
    instanceFiles.map(fp => path.resolve(projectDir, fp))
  );
  // return new TtsProject(
  //   projectDir,
  //   ([] as Instance[]).concat(...instanceArrs), // flatten
  // )
}

function getProjectDir(ttsprojPath: string): string {
  ttsprojPath = path.normalize(ttsprojPath);
  if (!ttsprojPath.endsWith(path.sep) && path.basename(ttsprojPath) === TtsprojFileName) {
    ttsprojPath = path.dirname(ttsprojPath);
  }
  return ttsprojPath;
}

async function readTtsprojFile(filepath: string): Promise<TtsprojContents> {
  const file = await readFile(filepath, "utf8");
  const parsed = JSON.parse(file);
  const out: Partial<TtsprojContents> = {};
  if (parsed.assetRoot) {
    if (typeof parsed.assetRoot !== "string") throw Error(`"assetRoot" not a string.`);
    out.assetRoot = parsed.assetRoot;
  }
  else {
    out.assetRoot = AssetRootDefault;
  }
  if (parsed.objectInstances) {
    if (typeof parsed.assetRoot === "string") {
      out.objectInstances = parsed.objectInstances;
    }
    else {
      //TODO: handle other forms of "objectInstances"
      throw Error(`"objectInstances" not a string.`);
    }
  }
  else {
    throw Error(`"objectInstances" not defined.`);
  }
  return out as TtsprojContents;
}

async function readInstanceFiles(filepaths: string[]): Promise<Instance[][]> {
  return Promise.all(filepaths.map(async fp => JSON.parse(await readFile(fp, "utf8"))))
}
