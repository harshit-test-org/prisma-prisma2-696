import { Photon } from '@generated/photon'

const photon = new Photon()

// A `main` function so that we can use async/await
async function main() {
  const data = await photon.accountConfigurations.findMany({
    select: {
      id: true,
      username: true,
      test: true,
      data: {
        select: {
          accountId: true,
        },
      },
    },
  })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
