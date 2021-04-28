import * as core from '@actions/core'
import {shorten} from './shorten'

async function run(): Promise<void> {
  try {
    const sha = core.getInput('sha')
    core.debug(`Sha:    ${sha}`)
    const length = Number(core.getInput('length'))
    core.debug(`Length: ${length}`)
    const shortSha = shorten(sha, length)
    core.debug(`Output: ${shortSha}`)

    core.setOutput('sha', shortSha)
    core.exportVariable('SHA', shortSha)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
