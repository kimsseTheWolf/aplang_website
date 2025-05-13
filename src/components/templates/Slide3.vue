<template>
  <PageHeader title="Types of Drugs and Their Effects" backgroundColor="#e8f5e9" />
  <MultiContentBlock leftType="text" rightType="text">
    <template #left>
      <h2>What are the different types of drugs?</h2>
      <p>
        Here are the common types of drugs that teens are commonly using or accidentally exposed to:
      </p>
      <CardBlock :cards="[
        { image: '/public/3.webp'},
        { image: '/public/4.jpg'},
        { image: '/public/5.jpg'},
        { image: '/public/6.jpg'},
      ]" >
        <template #card-0>
          <strong>Marijuana (Cannabis):</strong> Alters brain function, impairing memory, learning, and coordination. Frequent use can lead to cognitive deficits and mental health issues.
        </template>
        <template #card-1>
          <strong>Nicotine (E-cigarettes/Vaping):</strong> Highly addictive, harms brain development, and can cause lung inflammation and reduced respiratory health.
        </template>
        <template #card-2>
          <strong>Prescription Drugs:</strong> Misuse can lead to addiction, heart problems, and even fatal overdoses, especially with opioids like fentanyl.
        </template>
        <template #card-3>
          <strong>Synthetic and Illicit Street Drugs:</strong> Unpredictable potency and toxic additives increase the risk of poisoning, overdose, and long-term damage.
        </template>
      </CardBlock>
    </template>
    <template #right>
      <div style="display: flex; justify-content: center;">
        <img src="/public/research.png" />
      </div>
      <div>
        Part of the problem is that many substances are disguised or marketed in youth-friendly ways, making it hard for adults (and even teens themselves) to recognize the danger. For example, vaping devices can look identical to everyday objects. Some vapes are designed as pens, USB flash drives, or even highlighters that blend into a student’s pencil case. The vapor often smells like candy or fruit, so it doesn’t resemble the odor of tobacco that would normally tip off teachers or parents. This clever camouflage means a teen could be vaping in their bedroom or even in class without being detected, as long as they hide the device in plain sight.
      </div>
    </template>
  </MultiContentBlock>


  <ContentBlock>
    <template #content>
      <CardBlock :cards="[
        { image: '/public/1.png', text: 'A set of confiscated vape devices that were cleverly designed to look like highlighter pens. Disguised vapes like these allow students to inhale nicotine (or THC) in secret, as they resemble ordinary school supplies. Unsuspecting parents or teachers might not realize that the innocent-looking highlighter on a desk is actually an e-cigarette. Such stealth vaping products exploit teens’ desire to avoid detection, hooking them on nicotine while staying under authority figures’ radar.' },
        { image: '/public/2.png', text: 'So-called “Rainbow fentanyl” pills seized by the DEA. These brightly colored tablets (stamped with an “M” and “30” to resemble prescription oxycodone) look a bit like candy or children’s chewable vitamins, but are actually loaded with fentanyl. Drug cartels began mass-producing rainbow fentanyl in 2022 as a ploy to attract teens and young adults. The variety of pastel colors is not just for show – it’s a deliberate strategy to make the pills seem less scary and more fun. To an untrained eye, a bag of rainbow fentanyl could be mistaken for a bag of sweets. This is extremely dangerous because it lowers the psychological barriers to trying a pill. A teen might think, “It looks harmless,” when in reality any one of those pills could be lethal.' }
      ]">
        <template #card-0>
          A set of confiscated vape devices that were cleverly designed to look like highlighter pens. Disguised vapes like these allow students to inhale nicotine (or THC) in secret, as they resemble ordinary school supplies. Unsuspecting parents or teachers might not realize that the innocent-looking highlighter on a desk is actually an e-cigarette. Such stealth vaping products exploit teens’ desire to avoid detection, hooking them on nicotine while staying under authority figures’ radar.
        </template>
        <template #card-1>
          So-called “Rainbow fentanyl” pills seized by the DEA. These brightly colored tablets (stamped with an “M” and “30” to resemble prescription oxycodone) look a bit like candy or children’s chewable vitamins, but are actually loaded with fentanyl. Drug cartels began mass-producing rainbow fentanyl in 2022 as a ploy to attract teens and young adults. The variety of pastel colors is not just for show – it’s a deliberate strategy to make the pills seem less scary and more fun. To an untrained eye, a bag of rainbow fentanyl could be mistaken for a bag of sweets. This is extremely dangerous because it lowers the psychological barriers to trying a pill. A teen might think, “It looks harmless,” when in reality any one of those pills could be lethal.
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
