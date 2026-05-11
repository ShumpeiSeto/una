const ITEM_WIDTH = 92;
const ITEM_OFFSET = 45;

const container = document.querySelector('.mainvisual__container');
const buttons = document.querySelector('.mainvisual__buttons');
const list = document.querySelectorAll('.mainvisual__list');

let currentPosition = 1;

// メイン・メインビジュアルの切り替え

const updatePosition = function() {
  const windowWidth = document.querySelector('.mainvisual__window').offsetWidth;
  const itemWidth = document.querySelector('.mainvisual__item img').offsetWidth + 30;

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

// ブランド選択ボタン
let currentBrandPosition = 0;
const brandContainer = document.querySelector('.new-arrival__brands-container');
const brandList = document.querySelector('.new-arrival__brands-list');
const leftBtn = document.querySelector('.new-arrival__brands-btn--left');
const rightBtn = document.querySelector('.new-arrival__brands-btn--right');

if (rightBtn) {
  rightBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // rightボタン一度押されると左ボタンを表示する
    leftBtn.classList.remove('inactive-btn');
    console.log(currentBrandPosition);
    // 右端にいくとボタンを見えなくする
    if (currentBrandPosition>=10) {
      rightBtn.classList.add('inactive-btn');
    }

    // コンテナのアイテム数を計算する
    const itemCount = document.querySelector('.new-arrival__brands-list').length;
    currentBrandPosition++;
    // gap分を追加したアイテム幅
    const itemWidth = document.querySelector('.new-arrival__brands-item').offsetWidth + 20;
    const moveWidth = itemWidth * currentBrandPosition;
    brandContainer.style.transform = `translateX(-${moveWidth}px)`;
  })
}
if (leftBtn) {
  leftBtn.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(currentBrandPosition);
    // leftボタン一度押されると左ボタンを表示する
    rightBtn.classList.remove('inactive-btn');

    // 左端でボタンを見せなくする
    if (currentBrandPosition<=1) {
      leftBtn.classList.add('inactive-btn');
    }

    // コンテナのアイテム数を計算する
    const itemCount = document.querySelector('.new-arrival__brands-list').length;
    currentBrandPosition--;
    // gap分を追加したアイテム幅
    const itemWidth = document.querySelector('.new-arrival__brands-item').offsetWidth + 20;
    const moveWidth = itemWidth * currentBrandPosition;
    brandContainer.style.transform = `translateX(-${moveWidth}px)`;
  })
}

if (brandList) {
  brandList.addEventListener('click', (e) => {
    e.preventDefault();

    const targetLi = e.target.closest('li');
    if (!targetLi) return;

    // 該当するアイテムに下線を入れる
    [...brandList.children].forEach(item => item.classList.remove('new-arrival__brands-item--active'));
    targetLi.classList.add('new-arrival__brands-item--active');

    // ブランド名を取得
    const brandName = targetLi.dataset.brand;
    targetLi.parentNode.dataset.show = brandName;
  })
}

// スタイル選択ボタン
const styleSexList = document.querySelector('.styling__sex-list');

if (styleSexList) {
  styleSexList.addEventListener('click', (e) => {
    e.preventDefault();
    const targetLi = e.target.closest('li');
    if (!targetLi) return;
    [...styleSexList.children].forEach(item => item.classList.remove('styling__sex-item--active'));
    targetLi.classList.add('styling__sex-item--active');
  })
}