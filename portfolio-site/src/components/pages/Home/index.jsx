import React, { useState, useEffect } from 'react';
import { HomeWrapper, Hero, HeroContent, HeroImage, SectionWork, SectionBlog, ProfileSection, ProfileImage, ProfileContent } from './styles';
import { Container, Section, Heading, Text, Button, Grid, Card, CardBody, CardHeader, Flex } from '../../../styles/elements';
import { createClient } from "microcms-js-sdk";
import ProfilePic from '../../../assets/profile.png'; // プロフィール画像のインポート

const client = createClient({
  serviceDomain: "portfolio-test1",
  apiKey: "rY1kOhCDy19nhE0KvjvFaHZTTNZgSrJLUXdh",
});


const Home = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    client
      .get({
        endpoint: "blog",
      })
      .then((res) => {
        console.log('API Response:', res); // レスポンスの構造を確認
        setTitle(res.title);
        setContent(res.content);
        setThumbnail(res.thumbnail || null);
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
                    <Heading $size="xl">{title} {item}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text dangerouslySetInnerHTML={{ __html: content }} $mb="4">
                    
                    </Text>
                    {thumbnail && <img src={thumbnail.url} alt="サムネイル" />}
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
              {[1, 2].map((item) => (
                <Card key={item}>
                  <CardBody>
                    <Heading $size="lg">ブログ記事タイトル {item}</Heading>
                    <Text $color="gray600" $size="sm" $mb="2">2023年1月1日</Text>
                    <Text $mb="4">
                      ブログ記事の要約がここに入ります。興味を引くような内容を簡潔に表現しています。
                    </Text>
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