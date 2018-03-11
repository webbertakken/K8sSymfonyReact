<?php

namespace App\Listener;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;

/**
 * Class MaintenanceListener.
 *
 * When maintenance mode is enabled, display the maintenance page and stop further propagation.
 */
class MaintenanceListener
{
    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function onKernelRequest(GetResponseEvent $event): void
    {
        $isMaintenance = 'true' === strtolower($event->getRequest()->server->get('APP_MAINTENANCE')) ?? false;
        if (!$isMaintenance || !$event->isMasterRequest()) {
            return;
        }

        if ($this->container->has('profiler')) {
            $this->container->get('profiler')->disable();
        }

        if ($this->container->has('twig')) {
            $maintenance = $this->container->get('twig')->render('maintenance.html.twig');
        } else {
            $maintenance = '<html>Apache is functioning normally</html>';
        }

        $event->setResponse(new Response($maintenance, 503));
    }
}
