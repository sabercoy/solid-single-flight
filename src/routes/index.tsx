import { Suspense } from 'solid-js'
import {
  getSomeData1,
  getSomeData2,
  getSomeData3,
  getSomeData4,
  mutateSomeData1,
  mutateSomeData2,
  mutateSomeData3,
  mutateSomeData4
} from '../data/test'
import { useAction, RouteDefinition, createAsync } from "@solidjs/router"

export const route = {
  load: (args) => {
    return Promise.all([getSomeData1(), getSomeData2(), getSomeData3(), getSomeData4()])
  }
} satisfies RouteDefinition

export default function About() {
  const someData1 = createAsync(() => getSomeData1())
  const someData2 = createAsync(() => getSomeData2())
  const someData3 = createAsync(() => getSomeData3())
  const someData4 = createAsync(() => getSomeData4())


  const mutateSomeDataAction1 = useAction(mutateSomeData1)
  const mutateSomeDataAction2 = useAction(mutateSomeData2)
  const mutateSomeDataAction3 = useAction(mutateSomeData3)
  const mutateSomeDataAction4 = useAction(mutateSomeData4)


  const mutate1 = async () => {
    await mutateSomeDataAction1()
  }

  const mutate2 = async () => {
    await mutateSomeDataAction2()
  }

  const mutate3 = async () => {
    await mutateSomeDataAction3()
  }

  const mutate4 = async () => {
    await mutateSomeDataAction4()
  }

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}><div>{someData1()}</div></Suspense>
      <Suspense fallback={<div>Loading...</div>}><div>{someData2()}</div></Suspense>
      <Suspense fallback={<div>Loading...</div>}><div>{someData3()}</div></Suspense>
      <Suspense fallback={<div>Loading...</div>}><div>{someData4()}</div></Suspense>

      <button onClick={mutate1}>MUTATE 1</button>
      <button onClick={mutate2}>MUTATE 2</button>
      <button onClick={mutate3}>MUTATE 3</button>
      <button onClick={mutate4}>MUTATE 4</button>
    </main>
  );
}
