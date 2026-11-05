import Button from "./components/ui/Button";

function Section({ title, description, children }) {
  return (
    <section className="border-b border-slate-200 py-8 last:border-0">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>

      {description && (
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-3">{children}</div>
    </section>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="border-b border-slate-200 pb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Frontend Component Lab - 01
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Button Component
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            A reusable, accessible button built with React and Tailwind CSS.
          </p>
        </header>

        <Section
          title="Button Examples"
          description="Here are some examples of the button component in action."
        >
          <Button variant="primary">Primary Button</Button>

          <Button variant="secondary">Secondary Button</Button>

          <Button variant="danger">Delete</Button>
        </Section>

        <Section
          title="Primary Button Sizes"
          description="The Primary button can be rendered in three different sizes: small, medium, and large."
        >
          <Button variant="primary" size="sm">
            Small
          </Button>

          <Button variant="primary" size="md">
            Medium
          </Button>

          <Button variant="primary" size="lg">
            Large
          </Button>
        </Section>

        <Section
          title="Secondary Button Sizes"
          description="The Secondary button can be rendered in three different sizes: small, medium, and large."
        >
          <Button variant="secondary" size="sm">
            Small
          </Button>

          <Button variant="secondary" size="md">
            Medium
          </Button>

          <Button variant="secondary" size="lg">
            Large
          </Button>
        </Section>

        <Section
          title="Danger Button Sizes"
          description="The Danger button can be rendered in three different sizes: small, medium, and large."
        >
          <Button variant="danger" size="sm">
            Small
          </Button>

          <Button variant="danger" size="md">
            Medium
          </Button>

          <Button variant="danger" size="lg">
            Large
          </Button>
        </Section>

        <Section
          title="Disabled Buttons"
          description="The button component can be disabled by passing the 'disabled' prop. Disabled buttons are not interactive and have a reduced opacity to indicate the disabled state."
        >
          <Button variant="primary" disabled>
            Disabled Primary
          </Button>

          <Button variant="secondary" disabled>
            Disabled Secondary
          </Button>

          <Button variant="danger" disabled>
            Disabled Danger
          </Button>
        </Section>

        <Section
          title="Custom Button Styling"
          description="Additional Tailwind classes can be passed through the className prop."
        >
          <Button variant="primary" className="w-full sm:w-auto">
            Custom Width Button
          </Button>
        </Section>

        <Section
          title="Click Events"
          description="The Button component supports native click event handlers."
        >
          <Button
            variant="primary"
            onClick={() => alert("Button clicked successfully!")}
          >
            Click Me
          </Button>
        </Section>
      </div>
    </main>
  );
}

export default App;
