<template>
  <PageHeader title="Why Current Strategies Aren’t Working" backgroundColor="#fbe9e7" />
  <ContentBlock>
    <template #content>
      <img src="/warning-circle.svg"/>
      <h2>Why Current Strategies Aren’t Working</h2>
      <p>
        Previously, the main strategies for schools to prevent drug use were through applying the “Just Say No” approach. 
        Programs such as D.A.R.E. (Drug Abuse Resistance Education) became commonplace in schools, 
        Police officers or teachers urging students to refrain completely from drugs and highlighting the dangers of drugs. 
        Unfortunately, research and real-world outcomes have shown that these traditional strategies are not effective for teenagers anymore. 
        In fact, a meta-analysis found the D.A.R.E. program to be largely ineffective, 
        and one study even suggested that students who went through D.A.R.E. were more likely to use drugs later than those who didn’t.
      </p>
      <p>
        But what caused this approach to lose its ability to prevent drug use? Are there any other reasons that contributed to the failure of these strategies?
      </p>
    </template>
  </ContentBlock>

  <ContentBlock>
    <template #content>
      <CardBlock :cards="[
        { image: '/info.webp'},
        { image: '/stress.png'},
        { image: '/socialmedia.png'},
        { image: '/interactions.png'},
      ]" >
        <template #card-0>
          <h2>Outdated Information</h2>
          <p>
            Although programs like D.A.R.E. are spreading knowledge about the dangers of drugs and preventing students from taking them. But much of the information was outdated. New types of drugs require a better ability to distinguish, and drugs are hiding themselves inside products that were commonly loved and used by students.
          </p>
        </template>
        <template #card-1>
          <h2>Rising Stresses to Students</h2>
          <p>
            Students are facing more stress than before from school, family, and society. Many teenagers do not know the proper ways to relieve their stress, and with the influence of classmates, it's easy to drag students into consuming drugs.
          </p>
        </template>
        <template #card-2>
          <h2>Influences of Social Media</h2>
          <p>
            Social media sometimes does not have a very great content filtering system, especially for teenagers, and many drug-related contents were directly exposed to them without supervision by the schools and parents. Also, because of the widespread availability of drug-related content, it will cause teenagers to think that everyone is doing it, and encourage them to imitate drug consumption.
          </p>
        </template>
        <template #card-3>
          <h2>Not Personalized and Interactive</h2>
          <p>
            Everyone has different situations! Schools and parents really should provide proper help depending on the teen's situation by constantly checking in with them and asking them whether they encountered any problems, and also actively observing their mental health through their behavior and emotions expressed.
          </p>
        </template>
      </CardBlock>
    </template>
  </ContentBlock>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import CardBlock from '../CardBlock.vue';
import MultiContentBlock from '@/components/MultiContentBlock.vue';
</script>

<style scoped>
/* Add any specific styles for Slide4 here */
</style>
