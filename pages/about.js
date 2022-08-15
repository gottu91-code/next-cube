import Meta from '/components/meta'
import Container from '/components/container'
import Hero from '/components/hero'
import PostBody from '/components/post-body'
import Contact from '/components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from '/components/two-column'
import Accordion from '/components/accordion'
import Image from 'next/image'
import eyecatch from '/images/about.jpg'

export default function About() {
    return (
        <Container>
            <Meta
                pageTitle='アバウト'
                pageDesc='About development activities'
                pageImg={eyecatch.src}
                pageImgW={eyecatch.width}
                pageImgH={eyecatch.height}
            />

            <Hero
                title="About"
                subtitle="About development activities"
            />

            <figure>
                <Image
                    src={eyecatch}
                    alt=""
                    layout='responsive'
                    sizes="(min-width: 1152px) 1152px, 100vw"
                    priority
                    placeholder='blur'
                />
            </figure>

            <TwoColumn>
                <TwoColumnMain>
                    <PostBody>
                        <p>
                            Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
                        </p>
                        <h2>モノづくりで目指していること</h2>
                        <p>
                            Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
                        </p>
                        <p>
                            Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
                        </p>
                        <h3>新しいことへのチャレンジ</h3>
                        <p>
                            Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
                        </p>

                        <h2>FAQ</h2>
                        <Accordion heading="プログラミングのポイントについて">
                            <p>
                                プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき、目標とゴールを決め、そこに向かってさまざまな課題を設定していきながら、プログラムを作っていきます。
                            </p>
                        </Accordion>
                        <Accordion heading="プログラミングのポイントについて">
                            <p>
                                プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき、目標とゴールを決め、そこに向かってさまざまな課題を設定していきながら、プログラムを作っていきます。プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき、目標とゴールを決め、そこに向かってさまざまな課題を設定していきながら、プログラムを作っていきます。
                            </p>
                        </Accordion>
                        <Accordion heading="プログラミングのポイントについて">
                            <p>
                                プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき、目標とゴールを決め、そこに向かってさまざまな課題を設定していきながら、プログラムを作っていきます。
                            </p>
                        </Accordion>
                    </PostBody>
                </TwoColumnMain>

                <TwoColumnSidebar>
                    <Contact />
                </TwoColumnSidebar>
            </TwoColumn>
        </Container>
    )
}