const ITEM_WIDTH = 92;
const ITEM_OFFSET = 45;

const container = document.querySelector('.mainvisual__container');
const buttons = document.querySelector('.mainvisual__buttons');
const list = document.querySelectorAll('.mainvisual__list');

let currentPosition = 1;

// メイン・メインビジュアルの切り替え

const updatePosition = function() {
  const windowWidth = document.querySelector('.mainvisual__window').offsetWidth;
  const itemWidth = document.querySelector('.mainvisual__item img').offsetWidth;

  // const moveWidth = -(currentPosition) * itemWidth -(itemWidth/2 - windowWidth/2);
  const moveWidth = (currentPosition+1) * itemWidth - (itemWidth/2 + windowWidth/2);
  container.style.transform = `translateX(-${moveWidth}px)`
}

if (buttons) {
  buttons.addEventListener('click', (e) => {
    console.log('button clicked');
    e.preventDefault();
    const target = e.target.closest('button');
    if (!target) return;

    currentPosition = +target.dataset.position;

    // 該当するボタンのみを黒塗りにする
    [...buttons.children].forEach(b => b.classList.remove('active'));
    target.classList.add('active');
    updatePosition();

  })
}

document.addEventListener('DOMContentLoaded', () => {

  updatePosition();

  window.addEventListener('resize', updatePosition);
})

// メイン・新着アイテム
// タブ選択
const newArrivalTab = document.querySelector('.new-arrival__tab-list');
const tabs = [...newArrivalTab.children];

newArrivalTab.addEventListener('click', (e) => {
  e.preventDefault();

  // クリック箇所にクラス付加
  tabs.forEach(item => item.classList.remove('new-arrival__tab-item--active'));
  const targetTab = e.target.closest('li');
  targetTab.classList.add('new-arrival__tab-item--active');
})