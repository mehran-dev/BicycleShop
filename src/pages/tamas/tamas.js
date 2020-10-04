import React from 'react';
import css from './tamas.module.css';






const tamas = () => {
    return (
        <div className={css.container}>


            <div className={css.table}>
                <table >
                    <tr>
                        <th>شماره تماس</th>
                        <th>آدرس </th>
                        <th>روز های کاری </th>
                    </tr>
                    <tr>
                        <td>021-5522446699</td>
                        <td>قلمستون</td>
                        <td>هر روز 9 تا 22</td>
                    </tr>
                    <tr>
                        <td>021-45878954</td>
                        <td>خ تختی</td>
                        <td>هر روز 12 تا 23</td>
                    </tr>
                </table>
            </div>


            <div className={css.address}>
                چهار راه گمرک - خیابان گمرک - میدان گمرک - خیابان قلمستان - انتها خیابان - پلاک 120365 فروشگاه ثاقبی
        </div>


            <div className={css.info}>
                فروش اقساطی با ضامن معتبر در 15 قسط .                                        </div>
        </div >
    );
};

export default tamas;