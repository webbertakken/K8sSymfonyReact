<?php
/**
 * @date   2018-02-24
 * @author webbe
 */

namespace App\Controller;

use Psr\Log\LoggerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
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
    public function homepage(): Response
    {
        return new Response('OMG, My first page already! woo!');
    }

    /**
     * @Route("/news/{slug}", name="article_show")
     * @param $slug
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function show($slug): Response
    {
        $comments = [
            'Bacon ipsum dolor amet spare ribs filet mignon salami pig pancetta pork.',
            'Brisket pork shank pastrami beef ribs. Pork chop burgdoggen pork bresaola.',
            'Prosciutto andouille burgdoggen swine leberkas beef corned beef.',
        ];

        return $this->render('article/show.html.twig', [
           'title' => ucwords(str_replace('-', ' ', $slug)),
           'slug' => $slug,
           'comments' => $comments,
        ]);
    }

    /**
     * @Route("/news/{slug}/heart", name="article_toggle_heart", methods={"POST"})
     * @param                          $slug
     * @param \Psr\Log\LoggerInterface $logger
     *
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function toggleArticleHeart($slug, LoggerInterface $logger): JsonResponse
    {
        $logger->info('a heart has been given to blog post [' . $slug . ']');

        return $this->json(['hearts' => rand(5, 100)]);
    }
}
