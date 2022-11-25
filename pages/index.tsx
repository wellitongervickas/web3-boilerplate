export function getStaticProps() {
  return {
    props: {
      title: 'homepage'
    }
  }
}

export default function Home() {
  return (
    <div>
      <h1 className='text-2xl font-bold 2xl:text-4xl'>
        Welcome to web3 boilerplate
      </h1>
    </div>
  )
}
