<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * Class DemoController.
 */
class AppController extends AbstractController
{
    /**
     * @Route("/")
     */
    public function homepage(): Response
    {
        return $this->render('demo/index.html.twig');
    }

    /**
     * @Route("/{scene}", name="scene")
     */
    public function scene(string $scene): Response
    {
        return $this->render('scene.html.twig', [
            'scene' => $scene
        ]);
    }

    /**
     * @Route("/demo/{scene}", name="demo_scene")
     */
    public function demoScene(string $scene): Response
    {
        return $this->scene('demo/' . $scene);
    }
}
