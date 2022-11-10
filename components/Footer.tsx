import { NextPage } from 'next'

const Footer: NextPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUTE</h5>
        <p>How AirAnA works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>AirBnB Plus</p>
        <p>AirBnB Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessiblity</p>
        <p>This is not real site</p>
        <p>Its a pretty awesome clone</p>
        <p>AirBnB Plus</p>
        <p>AirBnB Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOT</h5>
        <p>How AirAnA works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>AirBnB Plus</p>
        <p>AirBnB Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>How AirAnA works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>AirBnB Plus</p>
        <p>AirBnB Luxe</p>
      </div>
    </div>
  )
}

export default Footer
