<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class StatsController.
 */
class StatsController extends AbstractController
{
    /**
     * @Route("/stats")
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function show(): Response
    {
        $stats = [
            'php_version' => PHP_VERSION,
        ];

        return $this->render('stats/show.html.twig', $stats);
    }
}
