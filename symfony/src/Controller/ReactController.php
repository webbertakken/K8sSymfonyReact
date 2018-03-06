<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class ReactController.
 */
class ReactController extends AbstractController
{
    /**
     * @Route("/react")
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function show(): Response
    {
        return $this->render('react/show.html.twig', []);
    }
}
