import { cache, action, redirect, reload } from '@solidjs/router'

export const getSomeData1 = cache(async () => {
  'use server'

  console.log('CACHE 1')

  await new Promise(res => setTimeout(res, 1000))

  return Date.now().toString()
}, 'someData1')

export const mutateSomeData1 = action(async () => {
  'use server'

  await new Promise(res => setTimeout(res, 1000))

  console.log('ACTION 1')
})

//////////////////////////////////////////////////////////////////////////////////

export const getSomeData2 = cache(async () => {
  'use server'

  console.log('CACHE 2')

  await new Promise(res => setTimeout(res, 1000))

  return Date.now().toString()
}, 'someData2')

export const mutateSomeData2 = action(async () => {
  'use server'

  await new Promise(res => setTimeout(res, 1000))

  console.log('ACTION 2')

  throw reload({ revalidate: [getSomeData1.key, getSomeData2.key, getSomeData3.key, getSomeData4.key] })
})

//////////////////////////////////////////////////////////////////////////////////

export const getSomeData3 = cache(async () => {
  'use server'

  console.log('CACHE 3')

  await new Promise(res => setTimeout(res, 1000))

  return Date.now().toString()
}, 'someData3')

export const mutateSomeData3 = action(async () => {
  'use server'

  await new Promise(res => setTimeout(res, 1000))

  console.log('ACTION 3')

  throw reload({ revalidate: getSomeData3.key })
})

//////////////////////////////////////////////////////////////////////////////////

export const getSomeData4 = cache(async () => {
  'use server'

  console.log('CACHE 4')

  await new Promise(res => setTimeout(res, 1000))

  return Date.now().toString()
}, 'someData4')

export const mutateSomeData4 = action(async () => {
  'use server'

  await new Promise(res => setTimeout(res, 1000))

  console.log('ACTION 4')

  throw redirect('/about')
})