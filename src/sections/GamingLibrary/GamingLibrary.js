import "./GamingLibrary.css"
import {SectionHeader,SectionWrapper,GamingLibraryCard } from '../../components/index'
import GamingLibrabyData from '../../Data/GamingLibrabyData'
const GamingLibrary = () => {
    const cards =GamingLibrabyData.map(card => {
        return <GamingLibraryCard  key={card.id } image={card.image} title={card.title} date_added={card.date_added} hours_played={card.hours_played} category={card.category} download={card.download}  />
      })
  return (
    <div>
      <SectionWrapper>
      <SectionHeader>GamingLibrary</SectionHeader>
      <div className='gaming_library_cards' >
            {cards}
      </div>
    </SectionWrapper>
    </div>
  )
}

export default GamingLibrary
