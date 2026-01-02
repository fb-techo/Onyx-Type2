import Link from 'next/link'
import { essentialSolutions, featuredSolution, advancedSolutions } from '@/lib/solutions-data'

function SolutionCategory({ category, featured = false }: { category: typeof essentialSolutions[0], featured?: boolean }) {
  const CategoryComponent = featured ? 'div' : 'div'
  const className = featured ? 'solution-category-featured' : 'solution-category'
  
  return (
    <CategoryComponent className={className} style={featured && category.title === 'Smart Retail Intelligence' ? { gridColumn: '1 / -1' } : {}}>
      <div className="category-header">
        <div className="category-icon">{category.icon}</div>
        <h3>{category.title}</h3>
      </div>
      <div className="solution-list">
        {category.items.map((item, idx) => (
          <Link key={idx} href={item.href} className="solution-item-link">
            <div className="solution-item">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </CategoryComponent>
  )
}

export default function Solutions() {
  return (
    <section id="solutions" className="solutions">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Solutions</span>
          <h2>Everything You Need To Run A Modern Store</h2>
          <p className="section-description">
            From checkout to inventory to customer experience—we've got you covered. All products work together seamlessly.
          </p>
        </div>

        <div className="solutions-section-header">
          <h3>Essential Tools</h3>
          <p>Start here. These are the must-haves for any successful retail operation.</p>
        </div>

        <div className="solutions-grid">
          {essentialSolutions.map((category, idx) => (
            <SolutionCategory key={idx} category={category} featured={true} />
          ))}
        </div>

        <div className="solutions-section-header">
          <h3>Featured Solution</h3>
          <p>Our integrated platform that combines traffic analytics with dynamic pricing.</p>
        </div>

        <div className="solutions-grid" style={{ marginBottom: 'var(--spacing-xl)' }}>
          <SolutionCategory 
            category={{
              title: featuredSolution.title,
              icon: featuredSolution.icon,
              items: featuredSolution.items,
              featured: true
            }} 
            featured={true} 
          />
        </div>

        <div className="solutions-section-header">
          <h3>Take It To The Next Level</h3>
          <p>Ready to stand out from competitors? These tools give you the edge.</p>
        </div>

        <div className="solutions-secondary">
          {advancedSolutions.map((category, idx) => (
            <SolutionCategory key={idx} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

