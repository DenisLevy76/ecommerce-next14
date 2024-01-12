import { ImagesCarousel } from '@/components/images-carousel'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { formatCurrency } from '@/lib/utils'

const IMAGES_MOCK = [
  'https://cdn.vnda.com.br/780x/lolja/2023/12/22/09_10_19_380_9_12_2_202_03.png?v=1703247050',
  'https://cdn.vnda.com.br/780x/lolja/2023/12/22/09_03_28_424_9_12_7_785_moletom204.png?v=1703247103',
  'https://cdn.vnda.com.br/780x/lolja/2023/12/22/09_10_02_270_9_12_3_356_moletom204.png?v=1703247110',
  'https://cdn.vnda.com.br/780x/lolja/2023/12/22/09_03_28_30_9_12_7_788_moletom202.png?v=1703247221',
  'https://cdn.vnda.com.br/780x/lolja/2023/12/22/09_03_28_934_9_12_8_802_moletom205.png?v=1703247221',
]

const Product: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-x-14">
        <ImagesCarousel images={IMAGES_MOCK} />
        <div className="flex justify-center items-center">
          <article>
            <h3 className="font-semibold text-3xl">Moletom Carniçal</h3>
            <p className="text-base text-muted-foreground">
              Moletom fabricado com 88% de algodão e 12% de poliéster.
            </p>
            <p className="mt-8">
              <span className="block mb-2 text-muted-foreground">
                De: <span className="line-through">R$ 110,00</span>
              </span>
              <strong className="inline-block bg-primary text-black text-xl font-semibold rounded-full p-3">
                R$ 95,00
              </strong>{' '}
            </p>
            <p className="mt-6">
              Em até 12x sem juros no cartão de R$ {formatCurrency(95 / 12)}
            </p>

            <div className="flex flex-col gap-3 items-baseline">
              <label htmlFor="sizes" className="text-lg font-semibold mt-8">
                Tamanhos
              </label>
              <ToggleGroup
                type="single"
                id="sizes"
                variant={'outline'}
                className="gap-3"
              >
                <ToggleGroupItem
                  value="p"
                  aria-label="Selecionar o tamanho P"
                  className="w-12"
                >
                  P
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="m"
                  aria-label="Selecionar o tamanho M"
                  className="w-12"
                >
                  M
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="g"
                  aria-label="Selecionar o tamanho G"
                  className="w-12"
                >
                  G
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="gg"
                  aria-label="Selecionar o tamanho GG"
                  className="w-12"
                >
                  GG
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <Button className="w-full h-14 text-lg font-semibold mt-8 bg-green-700 hover:bg-green-600 text-white">
              Adicionar ao carrinho
            </Button>
          </article>
        </div>
      </section>
    </div>
  )
}
export default Product
