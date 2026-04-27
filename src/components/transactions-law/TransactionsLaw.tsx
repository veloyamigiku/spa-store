import type React from 'react'

interface TransactionsLawItem {
  name: string
  value: string
}

const transactionsLawItems: TransactionsLawItem[] = [
  /**
   * 1.販売業者・運営責任者に関する情報
   * ※だれが責任をもって販売しているか
   */
  {
    name: 'ショップ名',
    value: 'BEAUTY SITE'
  },
  {
    name: '販売業者', // 法人名または個人事業主の氏名
    value: '株式会社〇〇'
  },
  {
    name: '運営責任者', // 代表者名、またはEC事業の責任者名
    value: '〇〇　〇〇'
  },
  {
    name: '所在地（本社）', // 本社所在地や事業所の住所（省略は原則不可）
    value: '〒969-5204 福島県南会津郡下郷町弥五島下タ林6135'
  },
  {
    name: '電話番号（本社）', // 確実に連絡が取れる番号
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
  /**
   * 2.販売・商品価格に関する情報
   */
  {
    name: '販売価格',
    value: '販売商品毎に記載（税込）'
  },
  {
    name: '商品代金以外の必要料金（送料）',
    value: '商品代金とは別に、送料を頂戴しています。全国一律送料：600円（税込）※3,980円（税込）以上お買い上げで、配送料無料です。'
  },
  {
    name: '商品代金以外の必要料金（振込手数料）',
    value: '銀行振込をご利用の場合、振込手数料はお客様負担となります。'
  },
  {
    name: '商品代金以外の必要料金（代金引換手数料）',
    value: '一律330円（税込）※3,300円（税込）以上お買い上げのお客様は、手数料を無料とさせて頂きます。'
  },
  {
    name: '申し込み有効期限（キャンペーン・期間限定）',
    value: 'キャンペーン期間（または販売期間）終了までとさせて頂きます。詳細は各商品ページをご確認ください。'
  },
  {
    name: '販売数量について',
    value: '全ての商品について、一度に購入できる数量に上限がございます。※販売商品毎に記載'
  },
  {
    name: '〇〇',
    value: '△△'
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
