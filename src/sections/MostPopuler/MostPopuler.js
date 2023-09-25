import './MostPopuler.css'
import { Card,SectionHeader,SectionWrapper } from '../../components/index'
import MostPopulerData from '../../Data/MostPopularData'
const MostPopuler = () => {
  const cards =MostPopulerData.map(card => {
    return <Card  key={card.id  } image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download}  />
  })
  return (
    <>
    <SectionWrapper>
      <SectionHeader>Most Populer</SectionHeader>
      <div className='most-popular-items' >
        {cards}
      </div>
    </SectionWrapper>
    </>
  )
}

export default MostPopuler
