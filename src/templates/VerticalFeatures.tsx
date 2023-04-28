import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="प्रमुख शहरो में आज क भाव"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <VerticalFeatureRow
      title="Mumbai (मुंबई)"
      description="मुंबई में आज क भाव -  ₹ 70010"
      image="/assets/images/mumbai.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Chennai"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/chennai.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="New Delhi"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/new_delhi.svg"
      imageAlt="Third feature alt text"
    />
     <VerticalFeatureRow
      title="Kolkata"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/kolkata.svg"
      imageAlt="Second feature alt text"
      reverse
    />
   
  </Section>
);

export { VerticalFeatures };
