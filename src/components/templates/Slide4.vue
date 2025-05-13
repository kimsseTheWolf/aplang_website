<template>
  <PageHeader title="Why Current Strategies Aren’t Working" backgroundColor="#fbe9e7" />
  <ContentBlock>
    <template #content>
      <h2>Why Current Strategies Aren’t Working</h2>
      <p>
        Previouly, the main strategies for school to do the drug prevention is through applyin the “Just Say No” approach. 
        Programs such as D.A.R.E. (Drug Abuse Resistance Education) became commonplace in schools, 
        with police officers or teachers urging students to abstain completely from drugs and highlighting the dangerousness of drugs. 
        Unfortunately, research and real-world outcomes have shown that these traditional strategies are not that affected to teenagers anymore. 
        In fact, a meta-analysis found the D.A.R.E. program to be largely ineffective, 
        and one study even suggested that students who went through D.A.R.E. were more likely to use drugs later than those who didn’t.
      </p>
      <p>
        But what caused this approach losing its ability to prevent drug use? Is there any other reasons that contributed to the failure of these strategies?
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
            Although the programs like D.A.R.E. is spearing knowledges about dangerousness of drugs, and preventing students from taking them. But many information were outdated. New types of druges requires better ability to distinguish are emerging, and drugs are hidding themselves inside products that were commonly loved and used by students.
          </p>
        </template>
        <template #card-1>
          <h2>Rising Stresses to Students</h2>
          <p>
            Students are facing more stresses than before from school, family, and the society. Many teenagers does not know the proper ways to relief their stresses, and also with the influences by classmates, its easy to drag students into consuming drugs.
          </p>
        </template>
        <template #card-2>
          <h2>Influences of Social Media</h2>
          <p>
            Social media sometimes does not have a very great content filtering system, especially for teenagers, and many drug related contents were directly exposed to them without supervisions by the schools and parents. Also, because of the widespread of drug related contents, it will cause teenagers to think that everyone is doin it and encouraging them to imitate drug consumption.
          </p>
        </template>
        <template #card-3>
          <h2>Not Personalized and Interactive</h2>
          <p>
            Everyone has different situations! Schools and parents really should provide proper help depends on teen's situation by constanly checking in with them and asking them whether they encountered into any problems, and also actively observing their mental health through their behavior and emotions expressed.
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
