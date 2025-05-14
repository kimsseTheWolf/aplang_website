<template>
  <PageHeader title="Types of Drugs and Their Effects" backgroundColor="#e8f5e9" />
  <MultiContentBlock leftType="text" rightType="text">
    <template #left>
      <img src="/md-contrast.svg"/>
      <h2>What are the different types of drugs?</h2>
      <p>
        Here are the common types of drugs that teens are commonly using or accidentally exposed to:
      </p>
      <CardBlock :cards="[
        { image: '/3.webp'},
        { image: '/4.jpg'},
        { image: '/5.jpg'},
        { image: '/6.jpg'},
      ]" >
        <template #card-0>
          <strong>Marijuana (Cannabis):</strong> Worsening brain function, damaging memory, learning, and coordination. Frequent use can lead to cognitive problems and mental health issues.
        </template>
        <template #card-1>
          <strong>Nicotine (E-cigarettes/Vaping):</strong> Frequent use can lead to cognitive problems and mental health issues. Highly addictive, harms brain development, and can cause lung inflammation and worsening respiration.
        </template>
        <template #card-2>
          <strong>Prescription Drugs:</strong> Improper use can lead to addiction, heart problems, and even fatal overdoses, especially for opioids like fentanyl.
        </template>
        <template #card-3>
          <strong>Synthetic and Illicit Street Drugs:</strong> Unpredictable toxic components inside the drugs increase the risk of poisoning, overdose, and long-term damage.
        </template>
      </CardBlock>
    </template>
    <template #right>
      <div style="display: flex; justify-content: center;">
        <img src="/research.png" />
      </div>
      <div>
        Part of the problem is that many substances are disguised or marketed in youth-friendly ways, making it hard for adults (and even teens themselves) to recognize the danger. For example, vaping devices can look identical to everyday objects. Some vapes are designed as pens, USB flash drives, or even highlighters that blend into a student’s pencil case. The vapor often smells like candy or fruit, so it will be easier for teenagers to hide their vapor from teachers and parents. 
        This gives them the chance to vape in the bedroom or at school without being discovered, as long as they hide the device in plain sight. Also, sometimes the fruit or candy flavors of vaping products contain drugs or other potentially dangerous substances, which will severely damage teenagers' health.
      </div>
      <p>
        Also, sometimes the fruit or candy flavors of vaping products contains drugs or other potentially dangerous substances, which will hugly damage teenagers' health.
      </p>
    </template>
  </MultiContentBlock>


  <ContentBlock>
    <template #content>
      <CardBlock :cards="[
        { image: '1.png'},
        { image: '/2.png'}
      ]">
        <template #card-0>
          Vaping devices that are designed and produced like a highlighter. 
          E-cigarettes and vaping devices like this will easily mislead students into consuming dangerous and toxic substances. 
          Also, by designing like school supplies, it will be easy for students to bring them to school without letting teachers, parents, and other students know,
          which will cause teachers and parents to constantly ignore the issues of vaping and worsen the potential drug consumption from those devices.
        </template>
        <template #card-1>
          So-called “Rainbow fentanyl” pills were seized by the DEA. With the bright and "cute" colors, it will be very easy for children and teenagers to mistakenly think that those pills are candies, and hugely increase the potential of accidentally consuming them.
          This is a very dangerous situation because sometimes those pills will have strong effects on the body, causing the teenagers to be addicted to them and causing health problems.
        </template>
      </CardBlock>
    </template>
  </ContentBlock>
</template>

<script setup>
import MultiContentBlock from '@/components/MultiContentBlock.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import PageHeader from '@/components/PageHeader.vue';
import CardBlock from '@/components/CardBlock.vue';
</script>

<style scoped>
ul {
  padding-left: 1.5rem;
  line-height: 1.6;
}

ul li {
  margin-bottom: 0.5rem;
}
</style>
