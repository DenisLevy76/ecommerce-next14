import { ImagesCarousel } from '@/components/images-carousel'

const IMAGES_MOCK = [
  'https://cdn.vnda.com.br/780x/lolja/2023/12/22/09_10_19_380_9_12_2_202_03.png?v=1703247050',
  'https://cdn.vnda.com.br/780x/lolja/2023/12/22/09_03_28_424_9_12_7_785_moletom204.png?v=1703247103',
  'https://cdn.vnda.com.br/780x/lolja/2023/12/22/09_10_02_270_9_12_3_356_moletom204.png?v=1703247110',
  'https://cdn.vnda.com.br/780x/lolja/2023/12/22/09_03_28_30_9_12_7_788_moletom202.png?v=1703247221',
  'https://cdn.vnda.com.br/780x/lolja/2023/12/22/09_03_28_934_9_12_8_802_moletom205.png?v=1703247221',
]

const Product: React.FC = () => {
  return (
    <main className="flex flex-col gap-8">
      <section className="grid grid-cols-2">
        <ImagesCarousel images={IMAGES_MOCK} />
        <div>
          <h3 className="font-semibold text-3xl">Camisa Gamer Dark Souls 3</h3>
        </div>
      </section>
    </main>
  )
}
export default Product
