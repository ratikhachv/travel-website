import './SearchBar.css'
import location from '../../../../assets/location.png'
import searchwhite from '../../../../assets/searchwhite.png'


export default function SearchBar (){
return(
    <>
    <div className='searchbardiv'>
        <img className='location' src={location} alt='location'/>
        <div className='inputs'>
            <input className='cityordestination' type="text"  placeholder='City or Destination'/>
            <div className='dateofstayDIV'>
                <input className='dateofstay' type="text"  placeholder='Date of stay'/>
            </div>
            <div className='personDIV'>
                <input className='person' type="text"  placeholder='Person'/>
            </div>
            <div className='findtripnow'>
                <p className='findtrip'>Find Trip Now</p>
                <img src={searchwhite} alt='search'/>
            </div>
        </div>
       
    </div>
    </>
)

}