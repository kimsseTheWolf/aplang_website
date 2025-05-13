<template>
  <PageHeader title="Solutions and Recommendations" backgroundColor="#e3f2fd" />
  <ContentBlock>
    <template #content>
      <h2>Solutions and Recommendations</h2>
      <p>
        The good news is that recognizing these shortcomings is the first step toward crafting better strategies. Schools, families, and communities can adopt new approaches that are more engaging, empathetic, and effective at keeping teens safe. Here are some of my litte advices and simple "helper guides" for you when encoutering these issues. Choose who you are, and everything is ready for you right there :D!
      </p>
    </template>
  </ContentBlock>

  <ContentBlock>
    <template #content>
      <div class="card-grid">
        <ExpandableCard>
          <template #default>
            <h3>Students</h3>
          </template>
          <template #sidebar>
            <img src="/student.webp" alt="Student" />
          </template>
          <template #expanded-content>
            <p>
              <h3>💡How should I prevent?</h3>
              <p>Use the following strategies for prevention:</p>
              <ul>
                <li>Find a healthy way to relief your stresses: why not listen to music, exercise, play some video games and etc?</li>
                <li>Don't trust every information on social media, most of the time when reading them without distinguishment, they will mislead and create biases and potential dangerous for you.</li>
                <li>Join clubs, interests groups, or sports team that builds connections with others and also boost your confidence</li>
                <li>Although it sounds easy and not useful, but keep practicing how to say "no" to others, including their gifts, drinks, or food.</li>
              </ul>
              <h3>🚨This is already happened! What should I do?</h3>
              <ul>
                <li>Don’t hide it—reach out to a school counselor, trusted adult, or helpline.</li>
                <li>Talk to a friend you trust who can support you without judgment.</li>
                <li>Set a small goal (like cutting the amount of consuming) and work from there.</li>
                <li>Learn about your options—usually schools have support groups for students, and somtimes there are organizations in the community you can reach out for help.</li>
              </ul>
            </p>
          </template>
        </ExpandableCard>

        <ExpandableCard>
          <template #default>
            <h3>Parents</h3>
          </template>
          <template #sidebar>
            <img src="/parents.png" height="300px" alt="Student" />
          </template>
          <template #expanded-content>
            <p>
              <h3>💡How should I prevent my children from taking drugs?</h3>
              <p>Use the following strategies for prevention:</p>
              <ul>
                <li>Regularly check in with your children! Ask them about their life at school, and listen to them if there is any problems they want to solve?</li>
                <li>Actively monitor your children's mental health. Is their behavior correct? Is their mood okay? Are they having any abnormal behavior, ideas, or expressions?</li>
                <li>Learning and identifying different forms of drugs existed in the society, especially for drugs hidden in other products</li>
                <li>Be a model to correctly relief stresses! Tell them and show them what are the correct ways to relief, and listen to them if they are under high stress conditions and facing stresses!</li>
              </ul>
              <h3>🚨This is already happened! What should I do?</h3>
              <ul>
                <li>Stay calm. <b>DO NOT</b> blame for your children. Otherwise it will shut down the communication between you and your children!</li>
                <li>Ask them with care: What is going on? Why your children is doing it?</li>
                <li>Collect information and contact professional help: Call teachers at school for more information at school, calling for hospitals or organizations that help with drug preventions, etc.</li>
                <li>Always create a safe environment for them to recover, and be supportive, letting them know you are always there for help!</li>
              </ul>
            </p>
          </template>
        </ExpandableCard>

        <ExpandableCard>
          <template #default>
            <h3>Teachers</h3>
          </template>
          <template #sidebar>
            <img src="/teacher.png" height="400px" alt="Student" />
          </template>
          <template #expanded-content>
            <p>
              <h3>💡How should I prevent my students from potential drug usages?</h3>
              <p>Use the following strategies for prevention:</p>
              <ul>
                <li>Build trust with your students. Let them willing to communicate with you - either academic or daily life communication</li>
                <li>Encourage students to join school or class activities, let them build connections with other teachers and students at school.</li>
                <li>Be supportive. When your students are low or under stresses, ask them if they need help, and provide any necessary supports to them. This should be done privately and each students should have different approaches and suggestions based on their situations.</li>
                <li>Teach your students on how to distinguish drugs in daily life, where to ask help, and how drugs will affect their mental and physical health.</li>
              </ul>
              <h3>🚨This is already happened! What should I do?</h3>
              <ul>
                <li>Speak to them privately, with concern, and do not blame: "Hey, I've noticed some changes. I care and I'm here.""</li>
                <li>Contact parents and school administrators or other teachers that would help with this situation immediately.</li>
                <li>Follow up. Even just checking in can make a student feel seen.</li>
                <li>Keep things between you and the student. This should not let others be known otherwise it will create more pressures to the students and letting them become more confused during the process.</li>
              </ul>
            </p>
          </template>
        </ExpandableCard>

        <ExpandableCard>
          <template #default>
            <h3>School Administrators</h3>
          </template>
          <template #sidebar>
            <img src="/admin.webp" alt="Student" />
          </template>
          <template #expanded-content>
            <p>
              <h3>💡How should I prevent this in school?</h3>
              <p>Use the following strategies for prevention:</p>
              <ul>
                <li>Train your staffs! Teach them how to recognize students' emotions, and how they should properly provide help to students.</li>
                <li>Provide students a place to relief their stress, either creating a stree relief room or make adjustments to daily workload or schedule.</li>
                <li>Invest in mental health counselor and related resources. Increase the advertisement of services related to mental health to students.</li>
                <li>Create an enivornment that let the students feel that they are safe.</li>
              </ul>
              <h3>🚨This is already happened! What should I do?</h3>
              <ul>
                <li>Help them to connect to other available supportive services!</li>
                <li>Keep the communication with the family. Always keeping up the situation of the student.</li>
                <li>Make sure to protect your student's privacy! Keep this in private and between the teachers and the family.</li>
                <li>Make adjustments to current policies and strategies on prevention in school, and monitor student's emotions and moods more closely for further prevention!</li>
              </ul>
            </p>
          </template>
        </ExpandableCard>
      </div>
    </template>
  </ContentBlock>
  <ContentBlock>
    <template #content>
      <h2>PLEASE REMEMBER</h2>
      <p>
        Your teachers and parents are always there for you! If you really need help and don't know what to do, it is always a good option to ask them for help first!
      </p>
    </template>
  </ContentBlock>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import ExpandableCard from '@/components/ExpandableCard.vue';
import RoundButton from '@/components/RoundButton.vue';
</script>

<style scoped>
/* Add any specific styles for Slide5 here */
.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
</style>
