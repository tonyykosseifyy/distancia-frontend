import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1 className="display-1">Distancia</h1>
            <p className="lead">Lebanese Educational Platform</p>
          </div>
          <div className="col-12 col-md-6">
            {/* <Image src="/images/undraw_teaching.svg" width={500} height={500} /> */}
          </div>
        </div>
      </div>
      
    </main>
  )
};