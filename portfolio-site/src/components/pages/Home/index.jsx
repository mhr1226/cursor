import React, { useState, useEffect } from 'react';
import { HomeWrapper, Hero, HeroContent, HeroImage, SectionWork, SectionBlog, ProfileSection, ProfileImage, ProfileContent } from './styles';
import { Container, Section, Heading, Text, Button, Grid, Card, CardBody, CardHeader, Flex } from '../../../styles/elements';
import { createClient } from "microcms-js-sdk";
import ProfilePic from '../../../assets/profile.png'; // プロフィール画像のインポート

// microCMSの設定
const client = createClient({
  serviceDomain: "portfolio-test1",
  apiKey: "rY1kOhCDy19nhE0KvjvFaHZTTNZgSrJLUXdh",
});


const Home = () => {

  // blog用のuseState
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogThumbnail, setBlogThumbnail] = useState(null);

  // works用のuseState
  const [worksItems, setWorksItems] = useState([]);
  

  // blog用のuseEffect
  useEffect(() => {
    // エンドポイントの取得

    const BlogPromise = client.get({
        endpoint: "blog",
      });

      // APIレスポンスが成功した場合の処理
      BlogPromise.then((res) => {
        // console.log('API Response:', res); // レスポンスの構造を確認
        setBlogTitle(res.title);
        setBlogContent(res.content);
        setBlogThumbnail(res.thumbnail || null);
      })
      .catch((err) => console.log(err));
  }, []);

  // works用のuseEffect
  useEffect(() => {
    const WorksPromise = client.get({
      endpoint: "works",
    });

  WorksPromise.then((res) => {
    console.log('API Response:', res.contents);
    setWorksItems(res.contents);
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <HomeWrapper>
      <Hero>
        <Container>
          <HeroContent>
            <div>
              <Heading $size="5xl" $color="white" $mb="4">ポートフォリオサイトへようこそ</Heading>
              <Text $color="gray200" $size="xl" $mb="6">
                私のスキルや作品をご紹介します。
              </Text>
              <Button $size="lg">詳しく見る</Button>
            </div>
            <HeroImage>
              {/* 画像はあとで追加 */}
            </HeroImage>
          </HeroContent>
        </Container>
      </Hero>

      <Section $bg="white">
        <Container>
          <ProfileSection>
            <Flex $align="center" $gap="8">
              <ProfileImage>
                <img 
                  src={ProfilePic} 
                  alt="雪見 雫（ゆきみ しずく）のプロフィール画像" 
                />
              </ProfileImage>
              <ProfileContent>
                <Heading $size="3xl" $mb="4">自己紹介</Heading>
                <Text $mb="4">
                  はじめまして。私は雪見 雫（ゆきみ しずく）と申します。
                  このポートフォリオサイトでは、私の経歴、スキル、作品などを紹介しています。
                </Text>
                <Text $mb="4">
                  私はWebデザインとフロントエンド開発を専門としており、3年の経験があります。
                  美しいUIデザインと使いやすいUX設計が得意で、ユーザーに喜ばれるWebサイト制作を提供することができます。
                </Text>
                <Button $variant="outlined" $size="lg">詳細プロフィール</Button>
              </ProfileContent>
            </Flex>
          </ProfileSection>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading $align="center" $mb="8">最近の作品</Heading>
          <SectionWork>
            <Grid $columnsmd="repeat(2, 1fr)" $columnslg="repeat(3, 1fr)" $gap="6">
              {[1, 2, 3].map((item) => (
                <Card key={item}>
                  <CardHeader>
                    <Heading $size="xl">{blogTitle} {item}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text dangerouslySetInnerHTML={{ __html: blogContent }} $mb="4">
                    
                    </Text>
                    {blogThumbnail && <img src={blogThumbnail.url} alt="サムネイル" />}
                    <Button $variant="outlined">詳細を見る</Button>
                  </CardBody>
                </Card>
              ))}
            </Grid>
          </SectionWork>
        </Container>
      </Section>

      <Section $bg="gray100">
        <Container>
          <Heading $align="center" $mb="8">ブログ記事</Heading>
          <SectionBlog>
            <Grid $columnsmd="repeat(2, 1fr)" $gap="6">
              {worksItems.map((workItem) => (
                <Card key={workItem.id}>
                  <CardBody>
                    <Heading $size="lg">{workItem.title}</Heading>
                    <Text $color="gray600" $size="sm" $mb="2">2023年1月1日</Text>
                    <Text $mb="4" dangerouslySetInnerHTML={{ __html: workItem.content }}>
                    </Text>
                    {workItem.thumbnail && <img src={workItem.thumbnail.url} alt="サムネイル" />}
                    <Button $variant="text">続きを読む</Button>
                  </CardBody>
                </Card>
              ))}
            </Grid>
          </SectionBlog>
        </Container>
      </Section>
    </HomeWrapper>
  );
};

export default Home; 