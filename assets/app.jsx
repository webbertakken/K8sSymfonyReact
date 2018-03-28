import 'react';
import 'react-dom';
import $ from 'jquery';
import 'bootstrap';
import './app.scss';

// Temporarily add script directly
$(document).ready(() => {
  $('.js-like-article').on('click', (e) => {
    e.preventDefault();

    const $link = $(e.currentTarget);
    $link.toggleClass('fa-heart-o').toggleClass('fa-heart');

    $.ajax({
      method: 'POST',
      url: $link.attr('href'),
    }).done((data) => {
      $('.js-like-article-count').html(data.hearts);
    });
  });
});
