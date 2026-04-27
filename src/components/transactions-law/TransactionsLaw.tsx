import type React from 'react'

interface TransactionsLawItem {
  name: string
  value: string
}

const transactionsLawItems: TransactionsLawItem[] = [
  {
    name: 'ショップ名',
    value: 'BEAUTY SITE'
  },
  {
    name: '販売業者',
    value: '株式会社〇〇'
  },
  {
    name: '運営責任者',
    value: '〇〇　〇〇'
  },
  {
    name: '所在地（本社）',
    value: '〒969-5204 福島県南会津郡下郷町弥五島下タ林6135'
  },
  {
    name: '電話番号（本社）',
    value: '0241-68-〇〇〇〇'
  },
  {
    name: '所在地（事業所所在地）',
    value: '〒501-4304 岐阜県郡上市明宝奥住4224'
  },
  {
    name: '電話番号（事業所所在地）',
    value: '0575-87-〇〇〇〇'
  },
]

const TransactionsLaw: React.FC = () => {

  return (
    <>
      <div>
        <hr />
        <div>特定商取引法に基づく表記</div>
        <hr />
      </div>
      
      <div className='overflow-hidden rounded-lg border border-gray-200 m-6'>
        <table className='min-w-full divide-y divide-gray-200'>
          <tbody className='divide-y divide-gray-200 bg-white'>
            {transactionsLawItems.map((item) => (
              <tr key={item.name}>
                <th className='whitespace-nowrap px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-50 w-1/3'>
                  {item.name}
                </th>
                <td className='px-4 py-3 text-sm text-gray-700'>
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )

}

export default TransactionsLaw
