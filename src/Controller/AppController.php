<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * Class AppController.
 */
class AppController extends AbstractController
{
    /**
     * @Route("/demo/coreui")
     */
    public function demo()
    {
        return $this->render('demo/show.html.twig');
    }
}
