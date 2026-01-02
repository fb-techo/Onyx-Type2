import { notFound } from 'next/navigation'
import Link from 'next/link'
import { pillarPages, getPillarBySlug } from '@/lib/pillarPages'

export async function generateStaticParams() {
  return pillarPages.map((pillar) => ({
    slug: pillar.slug,
  }))
}

export default function PillarPage({ params }: { params: { slug: string } }) {
  const pillar = getPillarBySlug(params.slug)
  
  if (!pillar) {
    notFound()
  }

  return (
    <main>
      <section className="pillar-hero">
        <div className="container">
          <div className="pillar-hero-content">
            <div className="pillar-icon-large">
              {pillar.icon}
            </div>
            <h1>{pillar.title}</h1>
            <p className="pillar-hero-description">{pillar.description}</p>
          </div>
        </div>
      </section>

      <section className="pillar-overview">
        <div className="container">
          <div className="pillar-overview-content">
            <h2>{pillar.overviewTitle}</h2>
            <div className="overview-text-grid">
              {pillar.overview.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pillar-solutions">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Solutions</span>
            <h2>Related Solutions</h2>
            <p className="section-description">{pillar.solutionsDescription}</p>
          </div>
          <div className="pillar-solutions-grid">
            {pillar.solutions.map((solution, idx) => (
              <Link key={idx} href={solution.href} className="pillar-solution-card">
                <div className="solution-icon">
                  {solution.icon}
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

