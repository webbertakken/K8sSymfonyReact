<?php
/**
 * @date   2018-02-24
 * @author webbe
 */

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class ArticleController
 *
 * @package App\Controller
 */
class ArticleController extends AbstractController
{
    /**
     * @Route("/")
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function homepage()
    {
        return new Response('OMG, My first page already! woo!');
    }

    /**
     * @Route("/news/{slug}")
     * @param $slug
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function show($slug)
    {
        $comments = [
            'Bacon ipsum dolor amet spare ribs filet mignon salami pig pancetta pork.',
            'Brisket pork shank pastrami beef ribs. Pork chop burgdoggen pork bresaola.',
            'Prosciutto andouille burgdoggen swine leberkas beef corned beef.',
        ];

        return $this->render('article/show.html.twig', [
           'title' => ucwords(str_replace('-', ' ', $slug)),
           'comments' => $comments,
        ]);
    }
}
