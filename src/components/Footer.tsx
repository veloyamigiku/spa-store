import React from 'react'
import { Link } from 'react-router'

interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

const footerSections: FooterSection[] = [
  {
    title: 'About',
    links: [
      {
        label: '会社概要',
        href: '#'
      },
    ]
  },
  {
    title: 'Support',
    links: [
      {
        label: 'よくある質問',
        href: '#'
      },
      {
        label: '配送・送料',
        href: '#'
      },
      {
        label: 'お問い合わせ',
        href: '#'
      },
    ]
  },
  {
    title: 'Legal',
    links: [
      {
        label: '特定商取引法に基づく表記',
        href: '#'
      },
      {
        label: 'プライバシーポリシー',
        href: './privacy-policy'
      },
      {
        label: '利用規約',
        href: './terms-of-service'
      },
    ]
  },
]

const Footer: React.FC = () => {

  const currentYear = new Date().getFullYear()
  
  return (
    <footer className='bg-gray-900 text-gray-300 py-12 px-6'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>

        <div className='col-span-1 md:col-span-1'>
          <h2 className='text-white text-2xl font-bold mb-4'>BEAUTY SITE(ブランド名)</h2>
          <p className='text-sm leading-relaxed'>
            あなたの肌に、確かな潤いと輝きを。<br />
            厳選された成分で、理想の美しさをサポートします。<br />
            (タグライン[説明文、宣伝文句])
          </p>
        </div>

        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className='text-white font-semibold mb-4'>{section.title}</h3>
            <ul className='space-y-2'>
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className='hover:text-white transition-colors duration-200'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-sm'>
        <p>&copy; {currentYear} BEAUTY SITE Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
