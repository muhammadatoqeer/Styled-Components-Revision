import { Button, FancyBtn, FancyButton } from "./components/Button"
import ProfileCard from "./components/ProfileCard"
import ProductCard from "./components/ProductCard"
import NotificationBanner from "./components/NotificationBanner"
import PricingTableItem from "./components/PricingTableItem"
import TestimonialCard from "./components/TestimonialCard"
import AlertBox from "./components/AlertBox"
import UserBadge from "./components/UserBadge"
import Tag from "./components/Tag"
import ProgressBar from "./components/ProgressBar"
import StatsCard from "./components/StatsCard"
import FeatureList from "./components/FeatureList"

function App() {

  return (
   <>
    <h1 style={{textAlign: "center", marginBottom: "2rem"}}>React Styled Components Showcase</h1>
    <NotificationBanner message="Welcome to the styled components demo!" />

    <section style={{margin: "2rem 0"}}>
      <h2>Buttons</h2>
      <div style={{display: "flex", gap: "1rem", flexWrap: "wrap"}}>
        <Button>This is the styled button component</Button>
        <FancyBtn $variant='light'>FancyBtn (Light)</FancyBtn>
        <FancyButton>Fancy Button</FancyButton>
        <FancyButton as="a" href="#">Fancy Button as Link</FancyButton>
      </div>
    </section>

    <section style={{margin: "2rem 0"}}>
      <h2>Profile Card</h2>
      <ProfileCard
        name="Jane Doe"
        bio="Frontend developer passionate about UI/UX and React."
        avatar="https://randomuser.me/api/portraits/women/44.jpg"
        social={[
          { url: "https://twitter.com/", icon: "🐦" },
          { url: "https://github.com/", icon: "💻" },
        ]}
      />
    </section>

    <section style={{margin: "2rem 0"}}>
      <h2>Product Card</h2>
      <ProductCard
        image="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
        title="Wireless Headphones"
        price="$99.99"
        desc="High quality wireless headphones with noise cancellation and long battery life."
      />
    </section>

    <section style={{margin: "2rem 0"}}>
      <h2>Pricing Table Item</h2>
      <PricingTableItem
        plan="Pro"
        price="$19/mo"
        features={["Unlimited Projects", "Priority Support", "Advanced Analytics"]}
      />
    </section>

    <section style={{margin: "2rem 0"}}>
      <h2>Testimonial Card</h2>
      <TestimonialCard
        quote="This app made my workflow so much easier! Highly recommended."
        author="John Smith"
      />
    </section>

    <section style={{margin: "2rem 0"}}>
      <h2>AlertBox Examples</h2>
      <AlertBox type="success">Success! Your action was completed.</AlertBox>
      <AlertBox type="error">Error! Something went wrong.</AlertBox>
      <AlertBox type="warning">Warning! Please check your input.</AlertBox>
      <AlertBox type="info">Info! This is an informational message.</AlertBox>
    </section>

    <section style={{margin: "2rem 0"}}>
      <h2>UserBadge Example</h2>
      <UserBadge avatar="https://randomuser.me/api/portraits/men/32.jpg" name="Alex Turner" />
    </section>

    <section style={{margin: "2rem 0"}}>
      <h2>Tag Examples</h2>
      <div>
        <Tag>React</Tag>
        <Tag>Styled Components</Tag>
        <Tag>UI</Tag>
        <Tag>Demo</Tag>
      </div>
    </section>

    <section style={{margin: "2rem 0"}}>
      <h2>ProgressBar Example</h2>
      <ProgressBar value={70} />
    </section>

    <section style={{margin: "2rem 0"}}>
      <h2>StatsCard Example</h2>
      <div style={{display: "flex", gap: "1rem"}}>
        <StatsCard icon="👀" value={1200} label="Views" />
        <StatsCard icon="👍" value={350} label="Likes" />
        <StatsCard icon="💬" value={89} label="Comments" />
      </div>
    </section>

    <section style={{margin: "2rem 0"}}>
      <h2>FeatureList Example</h2>
      <FeatureList features={["Fast Performance", "Easy Integration", "Customizable Themes", "Responsive Design"]} />
    </section>
    </>
  )
}

export default App
