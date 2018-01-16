import { getRepository } from 'typeorm'
import Test from './entity/Test'

export async function getTests(ctx) {
  const testRepo = getRepository(Test)
  const tests = await testRepo.find()
  ctx.body = tests
}

export async function getTest(ctx) {
  const testRepo = getRepository(Test)
  const test = await testRepo.find({ id: ctx.params.id })
  ctx.body = test
}

export async function postTest(ctx) {
  const testRepo = getRepository(Test)
  const newTest = await testRepo.create(ctx.request.body)
  await testRepo.save(newTest)
  ctx.body = newTest
}
