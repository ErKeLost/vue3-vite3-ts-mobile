import path from 'path'
import { fileURLToPath } from 'url'

export function isDevFn(mode: string): boolean {
  return mode === 'development'
}

export function isProdFn(mode: string): boolean {
  return mode === 'production'
}

/**
 * Whether to generate package preview 生成包预览
 */
export function isReportMode(): boolean {
  return process.env.REPORT === 'true'
}

// Read all environment variable configuration files to process.env
export function wrapperEnv(envConf: any): ImportMetaEnv {
  const ret: any = {}

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n')
    realName = realName === 'true' ? true : realName === 'false' ? false : realName

    if (envName === 'VITE_PORT') {
      realName = Number(realName)
    }
    if (envName === 'VITE_PROXY') {
      try {
        realName = JSON.parse(realName)
      } catch (error) {}
    }
    ret[envName] = realName
    process.env[envName] = realName
  }
  return ret
}

/**
 * Get user root directory
 * @param dir file path
 */
export function getRootPath(...dir: string[]) {
  return path.resolve(process.cwd(), ...dir)
}

/**
 * 解析路径
 * @param basePath - 基础路径
 */
export function resolvePath(rootPath: string, basePath: string) {
  const root = fileURLToPath(new URL(rootPath, basePath))
  const src = `${root}src`

  return {
    root,
    src
  }
}
